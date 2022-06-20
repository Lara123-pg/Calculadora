import React from 'react';

import '../scss/Main.scss';

export function Calculator() {
    return(
        <div className="container">
            <h1>Calculadora</h1>

            <div className="calc">
                <div className="screen"></div>

                <div className="keyboard">
                    <table>
                        <tr>
                            <td><button>C</button></td>
                            <td><button>√</button></td>
                            <td><button>%</button></td>
                            <td><button>/</button></td>
                        </tr>

                        <tr>
                            <td><button>7</button></td>
                            <td><button>8</button></td>
                            <td><button>9</button></td>
                            <td><button>X</button></td>
                        </tr>

                        <tr>
                            <td><button>4</button></td>
                            <td><button>5</button></td>
                            <td><button>6</button></td>
                            <td><button>-</button></td>
                        </tr>

                        <tr>
                            <td><button>1</button></td>
                            <td><button>2</button></td>
                            <td><button>3</button></td>
                            <td><button>+</button></td>
                        </tr>

                        <tr>
                            <td><button>∛</button></td>
                            <td><button>0</button></td>
                            <td><button>.</button></td>
                            <td><button>=</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}