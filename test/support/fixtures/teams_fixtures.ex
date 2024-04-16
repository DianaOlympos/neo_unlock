defmodule NeoUnlock.TeamsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `NeoUnlock.Teams` context.
  """

  @doc """
  Generate a team.
  """
  def team_fixture(attrs \\ %{}) do
    {:ok, team} =
      attrs
      |> Enum.into(%{
        id: "some id",
        name: "some name"
      })
      |> NeoUnlock.Teams.create_team()

    team
  end
end
