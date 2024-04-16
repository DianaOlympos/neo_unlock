defmodule NeoUnlock.Repo.Migrations.CreateTeams do
  use Ecto.Migration

  def change do
    create table(:teams) do
      add :name, :string
      add :external_id, :string

      timestamps(type: :utc_datetime)
    end
  end
end
