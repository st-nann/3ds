export function getPassword() {
  return {
    validate: [
      { text: "At least 8 characters", option: 1, correct: false },
      { text: "At least one lowercase character", option: 2, correct: false },
      { text: "At least one uppercase character", option: 3, correct: false },
      { text: "At least one digit", option: 4, correct: false },
      { text: "At least one special character", option: 5, correct: false },
      { text: "The password must be matched", option: 6, correct: false }
    ],
    specialCharacters: [
      "dot (.)",
      "underscore (_)",
      "minus (-)",
      "assign (@)",
      "spacebar",
      "exclamation (!)",
      "asterisk (*)"
    ]
  };
}
