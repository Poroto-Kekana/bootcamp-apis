document.addEventListener('alpine:init', () => {
    Alpine.data('wordGame', () => ({
        
        sentence : '',
        longestWord : '',
        shortestWord : '',
        sum : '',


        inspectSentence() {
            axios
                .get(`/api/word_game?sentence=${this.sentence}`)
                .then((result) => {
                    //console.log(result.data)

                    this.longestWord = result.data.longestWord;

                    this.shortestWord = result.data.shortestWord;

                    this.sum = result.data.sum;
                });

        }
        

    }))
})