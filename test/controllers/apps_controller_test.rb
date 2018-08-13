require 'test_helper'

class AppsControllerTest < ActionDispatch::IntegrationTest
  test "should get top" do
    get apps_top_url
    assert_response :success
  end

end
