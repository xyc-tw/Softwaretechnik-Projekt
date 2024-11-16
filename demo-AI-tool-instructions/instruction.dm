# Project overview
A one-page demo website with simple function
,which contains following components:
1. textbox with placeholder "enter..."
2. "senden" button next to textbox
3. text with the restriction: 
    (1) at least 8 characters
    (2) at least 1 special character, but no more than 3, which must not follow one another (e.g. "abbaa!b!ba" is OK, but "abbaa!!ba" is not)
4. text shows the result: 
    case 1: empty input! (red)
    case 2: unvalid input! (red)
    case 3: successful input, saved back to database

Using NextJS 14, shadcn, tailwind , Lucid icon

# Core functions
1. validate the input and save the input to database
    (1) when the user click the button, validate the input according to the rrestrictions and show the result