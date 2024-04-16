defmodule NeoUnlock.Teams.Team do
  use Ecto.Schema
  import Ecto.Changeset

  schema "teams" do
    field :external_id, :string
    field :name, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(team, attrs) do
    team
    |> cast(attrs, [:name, :external_id])
    |> validate_required([:name, :external_id])
  end
end
