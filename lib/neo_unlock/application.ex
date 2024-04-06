defmodule NeoUnlock.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      NeoUnlockWeb.Telemetry,
      NeoUnlock.Repo,
      {DNSCluster, query: Application.get_env(:neo_unlock, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: NeoUnlock.PubSub},
      # Start a worker by calling: NeoUnlock.Worker.start_link(arg)
      # {NeoUnlock.Worker, arg},
      # Start to serve requests, typically the last entry
      NeoUnlockWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: NeoUnlock.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    NeoUnlockWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
