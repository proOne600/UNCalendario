require 'test_helper'

class SharedEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shared_event = shared_events(:one)
  end

  test "should get index" do
    get shared_events_url
    assert_response :success
  end

  test "should get new" do
    get new_shared_event_url
    assert_response :success
  end

  test "should create shared_event" do
    assert_difference('SharedEvent.count') do
      post shared_events_url, params: { shared_event: { event_id: @shared_event.event_id, social_network: @shared_event.social_network, user_id: @shared_event.user_id } }
    end

    assert_redirected_to shared_event_url(SharedEvent.last)
  end

  test "should show shared_event" do
    get shared_event_url(@shared_event)
    assert_response :success
  end

  test "should get edit" do
    get edit_shared_event_url(@shared_event)
    assert_response :success
  end

  test "should update shared_event" do
    patch shared_event_url(@shared_event), params: { shared_event: { event_id: @shared_event.event_id, social_network: @shared_event.social_network, user_id: @shared_event.user_id } }
    assert_redirected_to shared_event_url(@shared_event)
  end

  test "should destroy shared_event" do
    assert_difference('SharedEvent.count', -1) do
      delete shared_event_url(@shared_event)
    end

    assert_redirected_to shared_events_url
  end
end
