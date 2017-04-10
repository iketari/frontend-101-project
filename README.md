## Classes

<dl>
<dt><a href="#Fridge">Fridge</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#food">food</a></dt>
<dd><p>еда!</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#enable">enable()</a></dt>
<dd><p>Включает холодильник</p>
</dd>
<dt><a href="#addFood">addFood(item)</a></dt>
<dd><p>Добавляет еду</p>
</dd>
<dt><a href="#filterFood">filterFood(iterator)</a> ⇒ <code>Array.&lt;FoodItem&gt;</code></dt>
<dd><p>Фильтрует еду</p>
</dd>
<dt><a href="#removeFood">removeFood(food)</a></dt>
<dd><p>Удаляет еду</p>
</dd>
<dt><a href="#getFood">getFood()</a> ⇒ <code>Array.&lt;FoodItem&gt;</code></dt>
<dd><p>Возвращает всю еду</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FoodIterator">FoodIterator</a> ⇒ <code>boolean</code></dt>
<dd><p>Функция-итератор, перебирающая еду</p>
</dd>
</dl>

<a name="Fridge"></a>

## Fridge
**Kind**: global class  
<a name="new_Fridge_new"></a>

### new Fridge(power)

| Param | Type |
| --- | --- |
| power | <code>number</code> | 

<a name="food"></a>

## food
еда!

**Kind**: global variable  
<a name="enable"></a>

## enable()
Включает холодильник

**Kind**: global function  
<a name="addFood"></a>

## addFood(item)
Добавляет еду

**Kind**: global function  

| Param | Type |
| --- | --- |
| item | <code>FoodItem</code> | 

<a name="filterFood"></a>

## filterFood(iterator) ⇒ <code>Array.&lt;FoodItem&gt;</code>
Фильтрует еду

**Kind**: global function  

| Param | Type |
| --- | --- |
| iterator | <code>[FoodIterator](#FoodIterator)</code> | 

<a name="removeFood"></a>

## removeFood(food)
Удаляет еду

**Kind**: global function  

| Param | Type |
| --- | --- |
| food | <code>\*</code> | 

<a name="getFood"></a>

## getFood() ⇒ <code>Array.&lt;FoodItem&gt;</code>
Возвращает всю еду

**Kind**: global function  
<a name="FoodIterator"></a>

## FoodIterator ⇒ <code>boolean</code>
Функция-итератор, перебирающая еду

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| item | <code>FoodItem</code> | 
| index | <code>number</code> | 
| food | <code>Array.&lt;FoodItem&gt;</code> | 

