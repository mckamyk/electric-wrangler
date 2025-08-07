# electric-wrangler

This is a reproduction of the electric container not running properly in wrangler's docker environment.

> Note: you need docker running. You do not need a cloudflare account to test locally.

```bash
bun i
bun wrangler dev
# while thats running
curl localhost:8787
# check the docker logs
docker ps
docker logs workerd<tab>
```

The container doesn't start with an error similar to:

```
=ERROR REPORT==== 7-Aug-2025::21:37:29.969922 ===
** State machine user_drv terminating
** When server state  = {undefined,undefined}
** Reason for termination = error:undef
** Callback modules = [user_drv]
** Callback mode = state_functions
** Stacktrace =
**  [{erlang,nif_error,[undef],[{error_info,#{module => erl_erts_errors}}]},
     {prim_tty,isatty,1,[{file,"prim_tty.erl"},{line,1473}]},
     {user_drv,init,1,[{file,"user_drv.erl"},{line,171}]},
     {gen_statem,init_it,6,[{file,"gen_statem.erl"},{line,3323}]},
     {proc_lib,init_p_do_apply,3,[{file,"proc_lib.erl"},{line,333}]}]
```

Some LLMs have suggested that this is related to not having a tty.

Running this normally works fine

```bash
docker build . -t electric
docker run -e DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres -e ELECTRIC_INSECURE=true -p 3000:3000 --rm electric
```

I will note that it seems to behave okay when actually depoloyed to cloudflare.
