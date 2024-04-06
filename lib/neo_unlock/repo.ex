defmodule NeoUnlock.Repo do
  use Ecto.Repo,
    otp_app: :neo_unlock,
    adapter: Ecto.Adapters.Postgres
end
