/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type User = typeof import("astro:db").User.$inferSelect;
interface ImportMetaEnv {
  readonly ASTRO_DB_REMOTE_URL: string;
  readonly ASTRO_DB_APP_TOKEN: string;
  // 更多环境变量…
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}


declare namespace App {
	// Note: 'import {} from ""' syntax does not work in .d.ts files.
	interface Locals {
		session: import("lucia").Session | null;
		user: import("lucia").User | null;
    dbUser: User | null;
		isLoggedIn: boolean;
	}
}

