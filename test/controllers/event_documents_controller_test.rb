require 'test_helper'

class EventDocumentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event_document = event_documents(:one)
  end

  test "should get index" do
    get event_documents_url
    assert_response :success
  end

  test "should get new" do
    get new_event_document_url
    assert_response :success
  end

  test "should create event_document" do
    assert_difference('EventDocument.count') do
      post event_documents_url, params: { event_document: { event_id: @event_document.event_id, file: @event_document.file, name: @event_document.name, user_id: @event_document.user_id } }
    end

    assert_redirected_to event_document_url(EventDocument.last)
  end

  test "should show event_document" do
    get event_document_url(@event_document)
    assert_response :success
  end

  test "should get edit" do
    get edit_event_document_url(@event_document)
    assert_response :success
  end

  test "should update event_document" do
    patch event_document_url(@event_document), params: { event_document: { event_id: @event_document.event_id, file: @event_document.file, name: @event_document.name, user_id: @event_document.user_id } }
    assert_redirected_to event_document_url(@event_document)
  end

  test "should destroy event_document" do
    assert_difference('EventDocument.count', -1) do
      delete event_document_url(@event_document)
    end

    assert_redirected_to event_documents_url
  end
end
