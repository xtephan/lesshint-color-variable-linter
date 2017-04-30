# Lesshint Color Variable Linter

[![npm](https://img.shields.io/npm/v/lesshint-color-variable-linter.svg)](https://www.npmjs.com/package/lesshint-color-variable-linter)

## Example

### invalid
```less
.foo {
    color: red;
    background-color: #000000;
    border-color: rgb(0,0,0);
    text-decoration-color: rgba(0,0,0,1);
}
```

### valid
```less
.foo {
    color: @foo-color;
    background-color: @foo-background-color;
    border-color: @foo-border-color;
    text-decoration-color: @foo-decoration-color;
}
```

## Install

```console
$ npm install lesshint-color-variable-linter
```

## Usage

In your lesshint.json configuration add the following:

```json
    "colorAsVariable" : {
        "enabled" : true,
        "severity" : "warning"
    }
```

When running lesshint:

```
lesshint src/less/ lib/style.less --linters lesshint-color-variable-linter
```

## Options

* `enabled`: Turn on/off the linter rule. Values `true` or `false`.
* `severity`: Severity levels of the linter. Values `error` or `warning`. Default is set to `warning`.