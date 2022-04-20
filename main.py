def on_button_pressed_a():
    global selection
    if selection == 1:
        selection = 2
        paperImage.show_image(0)
    else:
        if selection == 2:
            selection = 3
            scissorsImage.show_image(0)
        else:
            selection = 3
input.on_button_pressed(Button.A, on_button_pressed_a)

selection = 0
scissorsImage: Image = None
paperImage: Image = None
radio.set_group(1)
rockImage = images.create_image("""
    . # # . .
        # # # # .
        # # # # .
        # # # # .
        . # # . .
""")
paperImage = images.create_image("""
    # # # # .
        # . . # .
        # . . # .
        # . . # .
        # # # # .
""")
scissorsImage = images.create_image("""
    # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
""")