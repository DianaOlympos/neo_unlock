defmodule NeoUnlockWeb.ErrorJSONTest do
  use NeoUnlockWeb.ConnCase, async: true

  test "renders 404" do
    assert NeoUnlockWeb.ErrorJSON.render("404.json", %{}) == %{errors: %{detail: "Not Found"}}
  end

  test "renders 500" do
    assert NeoUnlockWeb.ErrorJSON.render("500.json", %{}) ==
             %{errors: %{detail: "Internal Server Error"}}
  end
end
