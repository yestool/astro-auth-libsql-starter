import { defineDb, defineTable, column, NOW  } from 'astro:db';

export const User = defineTable({
  columns: {
    id: column.text({
			primaryKey: true
		}),
    email: column.text(),
    name: column.text(),
    password: column.text(),
    role: column.text(),
  }
})

export const Session = defineTable({
	columns: {
		id: column.text({
			primaryKey: true
		}),
		expiresAt: column.date(),
		userId: column.text({ references: () => User.columns.id }),
	}
});


export const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text({ optional: true }),
    published: column.date({ default: NOW }),
  },
});




// https://astro.build/db/config
export default defineDb({
  tables: { User, Session, Post },
})