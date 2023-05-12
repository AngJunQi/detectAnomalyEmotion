function handleSubmit () {
    const ml = document.getElementById('model').value;
    const ratio = document.getElementById('ratio').value;
    const data = document.getElementById('experiment').value;

    localStorage.setItem("Model", ml);
    localStorage.setItem("Ratio", ratio);
    localStorage.setItem("Experiment", data);

    return;
}
