import { Container, getContainer } from "@cloudflare/containers";

export class Electric extends Container<Env> {
  override defaultPort = 4000
  override envVars = {
    ELECTRIC_INSECURE: "true",
    DATABASE_URL: "postgres://postgres:postgres@postgres:5432/electric"
  }
}

export default {
  async fetch(request: Request, env: Env) {
    const container = getContainer(env.Electric)
    return container.fetch(request)
  }
}
