import pytest

from app.nlu.intents import understand
from app.nlu.normalize import normalize


@pytest.mark.parametrize(
    "text, intent",
    [
        ("I'd like to book a cleaning", "book"),
        ("can I make an appointment", "book"),
        ("I need to reschedule my appointment", "reschedule"),
        ("please cancel my appointment", "cancel_appointment"),
        ("I have a really bad toothache", "emergency"),
        ("what are your hours", "hours"),
        ("where are you located", "location"),
        ("do you take Delta insurance", "insurance"),
        ("sorry can you say that again", "repeat"),
        ("let's start over", "restart"),
        ("can I talk to a real person", "human"),
        ("yes that works", "affirm"),
        ("no", "deny"),
        ("that's all, bye", "goodbye"),
        ("purple monkey dishwasher", None),
    ],
)
def test_intents(text, intent):
    assert understand(normalize(text)).intent == intent


def test_details():
    u = understand(normalize("my name is Jane Doe and my number is 555 123 4567, I need a filling"))
    assert u.name == "Jane Doe"
    assert u.phone == "5551234567"
    assert u.service == "filling"


def test_choice_and_correction():
    assert understand("the second one").choice == 2
    assert understand("actually make it 4").correction is True


def test_leading_country_code_is_dropped():
    assert understand(normalize("1 555 123 4567")).phone == "5551234567"
