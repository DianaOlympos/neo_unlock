defmodule NeoUnlockWeb.Router do
  use NeoUnlockWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {NeoUnlockWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", NeoUnlockWeb do
    pipe_through :browser

    get "/", PageController, :home

    # live "/teams", TeamLive.Index, :index
    live "/teams/new", TeamLive.New
    # live "/teams/:external_id/edit", TeamLive.Index, :edit

    live "/team/:external_id", TeamLive.Show, :show
    live "/team/:external_id/show/edit", TeamLive.Show, :edit
  end

  # Other scopes may use custom stacks.
  # scope "/api", NeoUnlockWeb do
  #   pipe_through :api
  # end
end
