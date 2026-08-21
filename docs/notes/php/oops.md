
### `docs/notes/php/oop.md`

```md
# PHP OOP

OOP means Object-Oriented Programming.

The main concepts are:

- Class
- Object
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

Example:

```php
class User
{
    public string $name;

    public function sayHello(): string
    {
        return "Hello " . $this->name;
    }
