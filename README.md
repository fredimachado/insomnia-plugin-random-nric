# Generate random NRIC (National Registration Identity Card)

This is a simple insomnia plugin to generate a random NRIC document used in Singapore. At the moment it only generates NRIC with S prefix.

## Pre-requisites

This plugin requires [Insomnia](https://insomnia.rest/), the Open Source API client.

## Installation

1. Start Insomnia,
2. Click "Application" -> "Preferences" and choose the "Plugins" tab,
3. Enter `insomnia-plugin-random-nric` and click "Install Plugin".

    ![Plugin Installation](https://raw.githubusercontent.com/fredimachado/insomnia-plugin-random-nric/main/images/install.png)

4. Close the dialog.

## Usage

1. Go to a request in any collection,
2. Anywhere you can use a tag (usually body/query/header),
3. Press Cmd/Ctrl + Space and choose "Random NRIC",
4. Click the "Random NRIC" tag to check the preview,
5. You're good to go!

    ![Usage](https://raw.githubusercontent.com/fredimachado/insomnia-plugin-random-nric/main/images/usage.gif)

## Limitations

* At the moment it only generates NRIC with S prefix.

## Contributing

In case you want to improve it, PRs are welcome! :)
