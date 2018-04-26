# Hello - rollup, preact & typescript

This example project is to illustrate how to configure the phoenix framework
to use rollup instead of the default brunch for asset management. How to
configure typescript and preact, to get at bare project up and running with
these awesome components.

The project is created using the following steps

## Phoenix

mix phx.new --no-ecto --no-brunch hello

This just creates the basic bare phoenix project. If you are used to using brunch with phoenix
you will notice that there is no assets dir here because of the no-brunch parameter. We will
add our own structure.

## Basic node_modules

In the default brunch mode, all non js related assets will be copied
directly to priv, which doesn't really make sense to me, why not just work
those from priv?

Rollup is configured just to bundle the typescript files (tsx) into
the app.js in priv/js

Before you start phoenix, do

```
cd assets
npm install
```

This will install the needed node_modules as defined in package.json.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

You should see a tick counter and nothing else.
