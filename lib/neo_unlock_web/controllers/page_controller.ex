defmodule NeoUnlockWeb.PageController do
  use NeoUnlockWeb, :controller

  def home(conn,  %{"team_id"=> team_id}) when team_id != "" do
    redirect(conn, to: ~p(/team/#{team_id}))
  end

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, team_form: Phoenix.Component.to_form(%{"team_id" => ""}))
  end
end
