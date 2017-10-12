require 'test_helper'

class FavoriteEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favorite_event = favorite_events(:one)
  end

  test "should get index" do
    get favorite_events_url
    assert_response :success
  end

  test "should get new" do
    get new_favorite_event_url
    assert_response :success
  end

  test "should create favorite_event" do
    assert_difference('FavoriteEvent.count') do
      post favorite_events_url, params: { favorite_event: { event_id: @favorite_event.event_id, user_id: @favorite_event.user_id } }
    end

    assert_redirected_to favorite_event_url(FavoriteEvent.last)
  end

  test "should show favorite_event" do
    get favorite_event_url(@favorite_event)
    assert_response :success
  end

  test "should get edit" do
    get edit_favorite_event_url(@favorite_event)
    assert_response :success
  end

  test "should update favorite_event" do
    patch favorite_event_url(@favorite_event), params: { favorite_event: { event_id: @favorite_event.event_id, user_id: @favorite_event.user_id } }
    assert_redirected_to favorite_event_url(@favorite_event)
  end

  test "should destroy favorite_event" do
    assert_difference('FavoriteEvent.count', -1) do
      delete favorite_event_url(@favorite_event)
    end

    assert_redirected_to favorite_events_url
  end
end
