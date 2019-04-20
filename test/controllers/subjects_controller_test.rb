require 'test_helper'

class SubjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get subjects_index_url
    assert_response :success
  end

  test "should get show" do
    get subjects_show_url
    assert_response :success
  end

end
