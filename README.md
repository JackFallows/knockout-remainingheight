# knockout-remainingheight
## Description
Knockout binding for setting an element's height to be the remaining available in its parent, based on the parent's current height and the sum of the heights of the element's siblings.

## Installing
To install, use Bower:

`bower install --save knockout-remainingheight`

## Using
### Include in your page
`<script type="text/javascript" src="~/bower_components/knockout-remainingheight/remainingHeight.js"></script>`

### Use the binding
To use, the element's parent must have a defined height (so that it does simply end up the height of it's children). Then:

```
<div data-bind="remainingHeight: true">
...
</div>
```
