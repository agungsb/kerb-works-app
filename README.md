# React Native Developer Test: Build a simple menu and modal with a usable search box

## Story

As a user I want to tap the search icon and select a city from a list of cities. I would like to input text to filter the list and make selection easier. I would like to clear the text input.

## Technical Requirements

1) There should be a functional React Native application that runs on both iOS and Android.
2) The list of cities is:
`{cities: [
      “Brisbane, Australia”,
      “Sydney, Australia”,
      “Perth, Australia”,
      “Wellington, New Zealand”
]}`
3) The filter algorithm should search for partial matches. e.g. searching the above list for “Austr” should result in the list showing the first three cities.
4) The modal should dismiss if any other section of the screen is tapped.

## Acceptance Criteria

1) I can tap the search icon in the menu and a modal appears
2) The modal contains a list of options (scrollable) and a search box
3) I can use the search box to filter the list of options
4) I can clear the search box using an (x) button
5) The menu and modal perfectly match the design supplied
6) Insets are applied in the case of the app running on the iPhone X
7) The search box must allow me to input characters at a high rate without hitting a JavaScript
running too slowly warning
