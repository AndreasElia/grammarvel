# Grammarvel

Grammar for your words.

## How it should work as an API

Input:

```
text=helo my name name es andy
```

URL encoded:

```
text=helo%20my%20name%20name%20es%20andy
```

Output:

```
{
    "offset": 0,
    "length": 4,
    "text": "helo my name name es andy",
    "type": "SENTENCE_START_UPPERCASE",
    "message": "This sentence does not start with an uppercase letter.",
    "suggestions": [
        {
            "value": "Helo"
        }
    ],
},
{
    "offset": 8,
    "length": 9,
    "text": "helo my name name es andy",
    "type": "WORD_REPEATED",
    "message": "You repeated a word.",
    "suggestions": [
        {
            "value": "name"
        }
    ],
},
{
    "offset": 13,
    "length": 2,
    "text": "helo my name name es andy",
    "type": "SPELLING_MISTAKE",
    "message": "Possible spelling mistake found.",
    "suggestions": [
        {
            "value": "is"
        },
        {
            "value": "as"
        }
    ]
},
{
    "offset": 16,
    "length": 4,
    "text": "helo my name name es andy",
    "type": "SPELLING_MISTAKE",
    "message": "Possible spelling mistake found.",
    "suggestions": [
        {
            "value": "Andy"
        },
        {
            "value": "and"
        }
    ]
}
```
