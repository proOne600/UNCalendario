require 'test_helper'

class EventTest < ActiveSupport::TestCase
  fixtures :events
  test 'should get event' do
    event_example = events(:one)
    assert_equal(Event.find(event_example.id), event_example)
  end

  test 'should not save event without required fields' do
    event = Event.new
    assert_not event.save
  end

  test 'should get no events' do
    events_col = Event.search('asdf', '')
    assert_not_includes(events_col, events(:one))
  end

  test 'should include events in results' do
    events_col = Event.search(nil,nil).pluck(:id)
    event_example = events(:two)
    assert(events_col.include?(event_example.id), event_example.id)
  end
end
