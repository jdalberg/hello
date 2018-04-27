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

Install dependencies with `mix deps.get`, the mix task above asked me
if i wanted to install deps.

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

## So?

Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

You should see a tick counter and nothing else.

# Why did you do this?

This is just a guide of sorts to get you dev environment setup for
this type of project. Something i needed to do and could find very
little information on. Also, I forget easily, so I will let github
remember :)
