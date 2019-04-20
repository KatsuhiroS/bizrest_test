require 'test_helper'

class MypageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mypage_index_url
    assert_response :success
  end

  test "should get edit" do
    get mypage_edit_url
    assert_response :success
  end

end
