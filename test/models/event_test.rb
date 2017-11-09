require 'test_helper'

class EventTest < ActiveSupport::TestCase
  fixtures :events
  test "get events" do
    event_example = events(:one)
    assert_equal(Event.find(event_example.id), event_example)
  end
end
