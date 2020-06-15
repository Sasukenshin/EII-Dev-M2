import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "0"
    };
  }

  do_operation(operation) {
    this.setState({ label: "Oui" });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.screen_text}>{this.props.label}</Text>
      </View>
    );
  }
}

class Calc extends Component {
  constructor(props) {
    super(props);
  }

  bEval = false;

  state = {
    label: "0",
    bEval: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Screen label={this.state.label} />
        <View style={styles.button_row}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ label: this.state.label });
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ label: "0" });
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({
                label: this.state.label.substring(
                  0,
                  this.state.label.length - 1
                )
              });
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>{"<-"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "/",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "/"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_row}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "(",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "("
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>(</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: ")",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + ")"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "%",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "%"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "*",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "*"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_row}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "7",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "7"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "8",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "8"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "9",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "9"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "-",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "-"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_row}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "4",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "4"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "5",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "5"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "6",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "6"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={styles.button}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (this.state.bEval == true) {
                this.setState({
                  label: "+",
                  bEval: false
                });
              } else {
                this.setState({
                  label: this.state.label + "+"
                });
              }
            }}
            style={[styles.button, styles.darker_button]}
          >
            <Text style={[styles.button, styles.darker_button]}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_double_row}>
          <View style={styles.button_column}>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.bEval == true) {
                    this.setState({
                      label: "1",
                      bEval: false
                    });
                  } else {
                    this.setState({
                      label: this.state.label + "1"
                    });
                  }
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.bEval == true) {
                    this.setState({
                      label: "0",
                      bEval: false
                    });
                  } else {
                    this.setState({
                      label: this.state.label + "0"
                    });
                  }
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>0</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button_column}>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.bEval == true) {
                    this.setState({
                      label: "2",
                      bEval: false
                    });
                  } else {
                    this.setState({
                      label: this.state.label + "2"
                    });
                  }
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ label: this.state.label });
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>00</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button_column}>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ label: this.state.label + "3" });
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button_row}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.bEval == true) {
                    this.setState({
                      label: ".",
                      bEval: false
                    });
                  } else {
                    this.setState({
                      label: this.state.label + "."
                    });
                  }
                }}
                style={[styles.button, styles.darker_button]}
              >
                <Text style={styles.button}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.button_column}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  label: eval(this.state.label),
                  bEval: true
                });
              }}
              style={[styles.button, styles.darker_button]}
            >
              <Text style={[styles.button, styles.green_button]}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default function App() {
  return <Calc></Calc>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  screen: {
    flexDirection: "row",
    backgroundColor: "darkgrey",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 3
  },
  screen_text: {
    color: "white",
    marginRight: 5,
    marginBottom: 5,
    fontSize: 75
  },
  button_row: {
    flex: 1,
    flexDirection: "row"
  },
  button_double_row: {
    flex: 2,
    flexDirection: "row"
  },
  button_column: {
    flex: 1,
    flexDirection: "column"
  },
  button: {
    color: "white",
    flex: 1,
    borderColor: "black",
    borderWidth: 0.3,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#5A5A5A"
  },
  darker_button: {
    backgroundColor: "#3C3C3C"
  },
  green_button: {
    backgroundColor: "#FCAF00"
  }
});
