import React from "react";

const BuyNewPolicy = () => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="font-fancy p-3">Buy Policy</h1>
                <form>
                    <div className="row mb-1">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form6Example1" className="form-control" />
                                <label className="form-label" htmlFor="form6Example1">
                                    First name
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="form6Example2" className="form-control" />
                                <label className="form-label" htmlFor="form6Example2">
                                    Last name
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-1">
                        <input type="text" id="form6Example3" className="form-control" />
                        <label className="form-label" htmlFor="form6Example3">
                            Vehicle Registration Number
                        </label>
                    </div>

                    <div className="form-outline mb-1">
                        <input type="text" id="form6Example4" className="form-control" />
                        <label className="form-label" htmlFor="form6Example4">
                            Make & Model
                        </label>
                    </div>

                    <div className="form-outline mb-1">
                        <input type="email" id="form6Example5" className="form-control" />
                        <label className="form-label" htmlFor="form6Example5">
                            Year of First Registration
                        </label>
                    </div>

                    <div className="form-outline mb-1">
                        <input type="number" id="form6Example6" className="form-control" />
                        <label className="form-label" htmlFor="form6Example6">
                            Phone
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-6 border border-5">
                            <div className="text-center h1 font-fancy">Premium Payable</div>
                            <div className="text-center h1">$946</div>
                        </div>
                        <div className="col-6 border border-5">
                            <div className="text-center h1 font-fancy">Payable Monthly</div>
                            <div className="text-center h1">$78.83</div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                        Pay with
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default BuyNewPolicy;
