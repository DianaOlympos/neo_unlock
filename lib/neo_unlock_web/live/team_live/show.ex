defmodule NeoUnlockWeb.TeamLive.Show do
  use NeoUnlockWeb, :live_view

  alias NeoUnlock.Teams

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_params(%{"external_id" => id}, _, socket) do
    {:noreply,
     socket
     |> assign(:page_title, page_title(socket.assigns.live_action))
     |> assign(:team, Teams.get_team_by_external_id!(id))}
  end

  defp page_title(:show), do: "Show Team"
  defp page_title(:edit), do: "Edit Team"
end
