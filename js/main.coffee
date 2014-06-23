$ ->

  ppArray = (array) ->
    for row in array
      console.log row
  @board = [0..3].map (x) -> [0..3].map (y) ->0
  ppArray(@board)

  array1 =[0..3]

  array2 =[0..3]

  array3= [0..3]

  array4= [0..3]

  masterArray = ->
    x = array1 + array2 + array3 + array4

  masterArray()

  board=[]
  for x in [0..3]
    board[x]= []
    for y in [0..3]
      board[x][y]=0

  ppArray board

  generateTitle= (board) ->

  randomIndex= (x) ->
    Math.floor(Math.random()* x)

    for i in [0..1000]
      console.log randomIndex()

  randomValue = ->
    values =[2, 2, 2, 4]
    val = values[randomIndex(values.length)* 3]
    console.log randomValues

  console.log ppArray(@board)


  boardFull= ->
    for row in board
      for cell in row
        if cell == 0
          return false
    true

   x= 0,  y=0














