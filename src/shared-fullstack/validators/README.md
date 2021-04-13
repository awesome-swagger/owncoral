# validators

Light validation logic written using
[Zod](https://github.com/colinhacks/zod/tree/v3#basic-usage).


## Rationale

We need to sanity-check endpoint inputs coming from the client, which is untrusted.

### Why not rely on the database?

The database *also* has types and checks, but we shouldn't rely on it for first-pass validation.

The checks here should be extremely simple and _looser_ than DB checks. They're just intended to 
allow us to simplify endpoint controller logic.

If you find yourself doing complicated stuff with Zod here, please reconsider.
