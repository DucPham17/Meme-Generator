import React from "react"

function Header(){
    return (
        <header>
            <img width="25%" height="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAB7CAMAAADKQQWcAAAAb1BMVEX///8AAAD8/Pz4+Pj19fXx8fHr6+vo6OhfX1/i4uJZWVnJycnu7u7l5eXPz88EBARsbGzCwsLc3NxycnKnp6d8fHy5ubmEhIRkZGTW1taMjIyvr69NTU2ZmZk7OztGRkYjIyM0NDQcHBwsLCwUFBR10O6eAAAL4UlEQVR4nO1caZejKhBFxAVc4gKoKBo7+f+/8RWYPWbpnplu+px3P3Q7k9iHaxXFrSoQof/xP94FxpfXl//6tcB+EGY0CwnGZVlFYUQpDa+Z/jbYoYd5r0TdsmGaWCHE3psZG8ZxZDrHh6/8SmS6mLZ77wE2jP5edt34iNYRTRL99CA/hYMhKiWA2uYVu0Ekv2viRQlvXpE6Y0x+CTcYZaDnw4R6abUD5O+Ydhhh9r7JDvgQ5FeQi4ZPUwPsExy6zQ7mDYm/Qs3zdkK4rVMwCj/vkBYwM9sudZkbyuavUQNuwK5G5KcJPIH8IrUFRZ07HFK+FEfOmPrupxk8AEb8z6iBa+auapR8+6fcRF66yA2javen1ADazRn3xZXtCnsuXYyV3V+gtvH2nnvh5O1A8lo/F/lPk7mFX78xbDa9w336aS63eMNsbeUTuiRAz9Of1i3LhR8vqTVLgo1l/dx6QFs5RA6D2nrlkRyjg9LHNOm51s3gPZh+m7n9aUZnYPTUFJtB6HTltip+FFuGb6fwGNXDSp0BM+a6Sc+wWaRx88B0W4eWcP2Mmtc+HCiWD8SMQ9yel7UG/8mtnY6nrbe5MXz4bUN/CfGU2/xERxnPjBIpS15c3BF/39BfgRQPeRls3tKIfnm+g//rEb+P7IXeCF7/CRNbqtOfaf79mN9F/pya9562xyg3s27jlk++EFzjs1hyBWW5sXxtNfwZ4PbJXINQUq5GdIzRXZsj2Js7YodWAPw042Z0vQiCq0Ylt94qgNrcEHe4+ZuzkW6N5in8yAqZVNPMuuOn9rcEM0/uMFvsNrbxxxq359G8rAsVmd6PTBduyca2ddxB6s1JSiA3u3dI/fzOjBdDby74yG2DOP/whuo7xvwuWpHlZUIx6m/d8gE1mH9+yXmfgLSqil3De0LjkftLG+jF8/hWdIMsFNd1HeEbfcIeLtrhokAnHSDc9cAN/oyqwWJis9l95+BfQIvB5MlE7/zy2mzdVRix14RGAQnkqboOWWhOUGUDptyWSPG6/BEWq0ib2gYMjFR8vdLVN8EfV/q+Y6CREiiB3xTSCYH6su5/hscaqmawrmfawTK6TKWT6+gfNRfr4OlLMyU1IaAkxxJlJZJ8J36GxxryoT5eZpqQcyrHzkmYsd9Vbm6oza2oY1ZXWIS+TZKMM5ZT7FDuVsKCtNgH2/1np5XgUsz7kg/XQZT1R5VJ4rSxBfc9N4t37ZAq6TchOkpD+1sdRn+xbKf1VC5TcV78cuRnOdwV5ZRvDfENR6rV7lBDXCHfmiAoF0WB68XtLuIdSSOw72FZ9iNKLneU1D2Ej2jhHI+ZSy04rpFMYDhyYKasCFeR9b79uYAKoy1F10tirg5FrxMBoiLtgyKZl2ozcYsbbbWPApUEkw0DGFnD7U8dGYx9gsqRo0trnSSyT3xrxvLj4MnuUANuPD7IpOnghp338fGxo8dvYKzHua9AOqYoqGTDWNyW5w+PWdyS4e6T7xz8C3AN8/94eRAfCSC/iHeYVFzURc0EZAveB6vrfWlsRW3DNQduQS+mpQcSO9Rd5FzFyl5hv7rsDF7Om6CIBW8krcdp3gOBLa8h/vhmgvoTRJJmrPu8WVYJh3Iczjljy1oVHp3ybs74UdeLdrBuiise7wcM5glH+MEnnzNpb+jt8l5829Bfouf5MCyqWNdPY5wfdgfuJFfmadARkp2i16dlvNy5xg3HorDcWPUkyJlPfHWsIdhJlcAykbV6J3TfEbz0upzyyV6jXJpuIPbj1+G7n1rZZZ0+Eej0UnEdbUPRb73WoVhSKgiDftpxgl9yA5eNZDuOrTwF0VzPk1CFCZ+wSkLq7pDZUMWWB90OEaMvvruCvB9scJVgPjBZNTpkNhSwJUAEDRu+0KfupIqtLomUSVT5+JeH92foD8PB5Ve4VUUxF0ucVLtCzw618Q2KP6lMhcMgOOM5jUC69PMXvPqfImXLw/7SjmO/SFpOpDm0U4tauqSULXIWvD0mjG6SGKUDeDaYkKrU2zc6dd8N9YliMImuCSQD8q0Y8+N5+3Y36/vQe6N+o4QD9soFazOU0nOkJ2OKZG38GSeTg3brPa+Jp6F+yg9G3zEGqY/cDcN0PkElOCJsmWgubXY6QhoVSOWw1u88zS5Qi1uTe/uiRyg6c+tAzpTj0sZR/36sn0W390yRkq1Ol8MuLrPF0polaK7Ni2FZJJNNt9PWPafEW28PP9e44e7ADekttY5HxM3e1n4gSJotXBg3DjUDjhhMgcofVrRgNR8uyo9DLIVUNCFS89w/LBy5B6442097lxpUB4AWhNxtbb7Jw35BuutO5edyLIRWbDpIfq7GEC0tju7x3q8fQ+J5MLY4u/1/8MSlvIxh7PjI7fBhNVsrBU0KCURvw0hYuMct88CvovFeDWJhNAcP8nplLnKzF1YWmu5CWPgMq6h2j1uwg0DZb+/VSVpAsO8YLtaES+qbyLIfJpklkclMUe7QbqcjyODFSG3vN/dTARl2r7JiKZiQjNIsMiEHn/ZmBNRHlZfb/9AONRaP8FtvgPzrnltnplEjbX0k5HVRN8oUYXVy5aKwrNvNsYS5d/QBdK43EbHy0BMTLtocoozZneztx1ZJmoa5bmue0PScFcRmXe+fFwF/BmC3MWxWuJUmTLJu9PuLxuKgE4JIopuiOZ2/UdLIZqf2lhzRe3MkVkpU1m6sG+jGY2qqYsm9xHQZJyuLo7I+lqINNy2cS00NArajzUoLpoLY77OuLT1PdALloCoRHWntgZIRSeQjWtT2EC3MtGp0T00iu1tpps1KIEhbioK4KxLTu9+WIssVwhpJgZVXbHZFw2VTAKVowkg4evoNnKpq7mQJACZh2HY9XZpr3rTzcNKgJDGLdWzflNGLBOFWompw0mwGwG1tbOWE0hjh4Hzye+95HadIUtRk5mUZvE2QilEwORlILBoq1tI3MlPfbD/W2/a8tWS7lQlHuA/6GXy1QJqFSDuYlx4h6LrOVQoZbt0+a7x5uzssBfv9ptGNKoCqxioOUF64VCy/QRGtj44yZNMciBS8nqt+EJdbgLfCqxp4KAGjrgYSAAuL9VJQTGszEbNtiLqacUl4sjjnZuNt80E1YDXcutTCv8NAHhQEtNS5zeRMmlPVs9KBKOVotlxMFW/4BCsgRFN3rYbQhMp29QUyeVP25gNf2Bpf2DdCqL6BKBJnNKZzZ+aky8wgy0H+uOpYWVypJcHhM7ccAtolpZQgKuOkhYyNO1hJuERem+1LK20YjOpSGYOZV7dopvPzG2aCtilniP6DS/ucVmArVOnqm394059mYiC1aLTMszTs+FhEMeivlVKEW1gCSRmH9+Qq0P/nZR0HNOdNHceFynG+wd3sdIiEAad2lysEQ9OuumU35LpYf5VT06Sj2yESgh9bTtNjrAv/bqyywdPqIZt0qgoHq3bX6L1TWtk0t3bDRIXRtHZ6JW/70fFX4mHE9EnEp+NtowkjmqHonht4sBpd2k6yCjqeTAUDvj11aKpzeCXMQzYqJ8cnG8iqyxZFOr557BD7OHHo9OU6/GsRX75ZZARLJvXrr/0kMLpcvgzW2nDr0sPFRuklcK5ed816ucpNOlgjPwMjzuqXygJHLF9LErTLmsRs50zeOUJTbtNbX8U4LdZKY84g3cjyrYDQ30liWC6EwysALFECte9MGox60wPGFwshSj4cdklscm06vyObgBSNi/zCLQnfOltINtQ6lSK9f6v6ZljIoubdQo8kheiczUmNUzUpCpj3/gD9jhdDwbu0jFvPvQ2FZ1TCdKel94lDlPYQFVXe2EaNp9zkZs5YqiU2jNvPlQRAxoycoG7smZPpDUa++ijs0IJPvyQmN2cvkeJIuykmq8l03e1RjOKTTz//MJWVcCAItw7ucEIo1sdgjuvPzRrMbZZgJSjdOLg1LR/8Y/gmn3SsZV9JaNq/oEucaydiFJ8rAT77QrDDaomtweia4XB6KQOHL5w1p8f9hnf1hx/HlaWmL2jCUxAJ3dyacET7+ReF9epUwywdes3YLb6Up1SnEyAYRX9dUv4HQeSjiAJFg5IAAAAASUVORK5CYII="></img>
            <h1>Meme Generator</h1>
        </header>
    )
}
export default Header