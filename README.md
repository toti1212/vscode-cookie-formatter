# Cookie Formatter

**Version**: 1.0.0 
**Author**: Rodrigo Suárez

## Overview

Cookie Formatter is a simple VSCode extension that allows you to easily format cookies into a more readable format or compress them into a single line for easy copying and pasting. This extension provides two commands: `Cookies: Compress` and `Cookies: Decompress`, which make working with cookies in your code more efficient and organized.

## Features

- **Cookies: Compress** - Converts multiple lines of cookies into a single line.
- **Cookies: Decompress** - Converts a single line of cookies into a more readable format by separating each cookie into its own line.

## Installation

1. Open VSCode.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3. Search for `Cookie Formatter`.
4. Click **Install** to install the extension.
5. Once installed, you can access the commands via `Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux.

## Usage

### 1. Decompress Cookies

This command will take a single line of cookies and format them into a more readable, multi-line format.

**Example:**

**Input:**
```
cookie_name=cookie_value;
cookie_name2=cookie_value2;
cookie_name3=cookie_value3;
```

**Output:**
```
cookie_name=cookie_value; cookie_name2=cookie_value2; cookie_name3=cookie_value3;
```

To use this command:
- Select the text containing the cookies.
- Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux).
- Type `Cookies: Compress` and press Enter.

## Commands

- `Cookies: Compress` - Compresses cookies into a single line.
- `Cookies: Decompress` - Decompresses cookies into a multi-line format.

## Contributing

If you find any issues or have suggestions for new features, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/your-repo-url).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.