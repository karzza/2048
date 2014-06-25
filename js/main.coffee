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

  generateTile= (board) ->
    unless boardFull(board)
      val= getRandomCell()
      [x,y]=getRandomCell()
      if board[x][y]=0
        board[x][y]=val
      else
        generateTitle(board)



  randomIndex= (x) ->
    Math.floor(Math.random()* x)

    for i in [0..1000]
      console.log randomIndex()

  randomValue = ->
    values =[2, 2, 2, 4]
    val = values[randomIndex(values.length)* 3]
    console.log randomValues

  console.log ppArray(@board)


  boardFull= (board)->
    for row in board
      for cell in row
        if cell == 0
          return false
    true

  getColumn = (board, column) ->
    # return an array
    cells=[]
    for row in [0.3]
      cells.push board[row][column]
    cells # => [2,2,0,0]

  collapseCells=(cells, direction) ->

  console.log "collapseCells"+ collapseCells([0,2,0,4], 'left')
  console.log "collapseCells"+ collapseCells([0,2,0,4], 'right')

  $('body').keydown (e) ->
    console.log e.which
    key=e.which
    keys= [37..40]

    if $.inArray(key,keys)> -1
      e.preventDefault()


      switch key
        when 37 # left
          console.log 'left'
        when 38
          console.log 'up'
        when 39
          console.log 'right'
        when 40
          console.log 'down'

    generateTitle(@board)
    ppArray(@board)

  mergeCells = (arrayToMerge, direction) ->
    newArray = arrayToMerge
    switch direction
      when 'up', 'right'
        for x in [3...0]
          for y in [x-1..0]
            if newArray[x] == 0 then break
            else if newArray[x] == newArray[y]
              newArray[x]= newArray[x]* 2
              newArray[y]=0
              break
            else if newArray[y] != 0
              break
      when 'down', 'left'
        for x in [0...3]
          for y in [x+1..3]
            if newArray[x] == 0 then break
            else if newArray[x] == newArray[y]
              newArray[x]= newArray[x]*2
              newArray[y]= 0
              break
            else if newArray[y] !=0
              break
    newArray

  getRow = (rowNumber, board) ->
    board[rowNumber]

  getColumn = (columnNumber, board) ->
    column = []
    for row in [0..3]
      column.push board[row][columnNumber]
    column

  setRow = (row, rowNumber, board) ->
    row = board[rowNumber]
    board[rowNumber] = row

  ppArray(setRow([1,1,1,1], 0,@board))





  console.log "mergeCells " + mergeCells([2,2,2,2]) #=> 0,4,0,4
  console.log "mergeCells " + mergeCells([2,2,2,2]) #=> 0,4,0,4
  console.log "mergeCells " + mergeCells([2,2,4,2]) #=> 0,4,4,2
  console.log "mergeCells " + mergeCells([4,2,2,2]) #=> 4,2,0,4





















