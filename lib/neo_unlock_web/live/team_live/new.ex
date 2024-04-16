defmodule NeoUnlockWeb.TeamLive.New do
  use NeoUnlockWeb, :live_view

  alias NeoUnlock.Teams
  alias NeoUnlock.Teams.Team

  def render(assigns) do
    ~H"""
    <div>
      <.header>
        <%= @page_title %>
        <:subtitle>Add your team name to create a team</:subtitle>
      </.header>

      <.simple_form for={@form} id="team-form" phx-change="validate" phx-submit="save">
        <.input field={@form[:name]} type="text" label="Name" />
        <:actions>
          <.button phx-disable-with="Saving...">Create Team</.button>
        </:actions>
      </.simple_form>
    </div>
    """
  end

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def handle_params(params, _url, socket) do
    team = Map.get(params, "team", %Team{})

    socket =
      socket
      |> assign(:team, team)
      |> assign(:page_title, "New Team")
      |> assign(:form, to_form(Teams.change_team(team)))

    {:noreply, socket}
  end

  def handle_event("validate", %{"team" => team_params}, socket) do
    changeset =
      socket.assigns.team
      |> Teams.change_team(team_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :form, to_form(changeset))}
  end

  def handle_event("save", %{"team" => team_params}, socket) do
    case Teams.create_team(team_params) do
      {:ok, team} ->
        {:noreply,
         socket
         |> put_flash(:info, "Team created successfully")
         |> push_navigate(to: ~p"/team/#{team.external_id}")}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :form, to_form(changeset))}
    end
  end
end
