function Research(): JSX.Element {
    window.scroll(0, 0);
    return (
        <div className="main">
            <section className="section">
                <h2 className="main-title">PUBLISHED PAPERS</h2>
                <p className="main-text">
                    <a className="link" href="https://doi.org/10.1016/j.omega.2021.102543" target="_blank" rel="noreferrer">Interpreting Clusters via Prototype Optimization,</a> Emilio Carrizosa, Kseniia Kurishchenko, Alfredo Marin, Dolores Romero Morales, Omega 107 (2022) 102543.</p>
                <p className="main-text">
                <a className="link" href="https://doi.org/10.1016/j.cor.2023.106180" target="_blank" rel="noreferrer">On Clustering and Interpreting with Rules by Means of Mathematical Optimization,</a> Emilio Carrizosa, Kseniia Kurishchenko, Alfredo Marin, Dolores Romero Morales, Computers & Operations Research 154 (2023) 106180.</p>
            </section>
            <section className="section">
                <h2 className="main-title">WORKING PAPERS</h2>
                <p className="main-text">
                    <strong>Fair Random Forests via Mathematical Optimization,</strong> Emilio Carrizosa, Kseniia Kurishchenko, Dolores Romero Morales, 2023
                </p>
                <p className="main-text">
                    <strong>Fair Prescriptive Random Forests,</strong> Kseniia Kurishchenko, 2023
                </p>
            </section>
        </div>


    );
}

export default Research;