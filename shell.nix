{ pkgs ? import <nixpkgs> { } }:

with pkgs;
let
  elixir = beam.packages.erlangR26.elixir_1_16;
  node = nodejs_21;

in mkShell {
  buildInputs = [ elixir node ];

  LANG = "en_US.UTF-8";
}
