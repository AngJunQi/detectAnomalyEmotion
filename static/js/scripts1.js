window.addEventListener('load', () => {
    const ml = localStorage.getItem('Model');
    const ratio = localStorage.getItem('Ratio');
    const data = localStorage.getItem('Experiment');

    document.getElementById('result-ml').innerHTML = ml;
    document.getElementById('result-ratio').innerHTML = ratio;
    document.getElementById('result-data').innerHTML = data;

})
