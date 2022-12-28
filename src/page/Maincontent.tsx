import * as React from 'react';
import './UI.css'

function Maincontent() {
    return (
        <>
            <div>
                <div>
                    I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <b>additionConfigs</b>.
                </div>
                <br />
                <div>
                    Example: <a href="https://codesandbox.io/s/elastic-pateu-2uy4rt">https://codesandbox.io/s/elastic-pateu-2uy4rt</a>
                </div>
                <div className="overflow-auto container-code">
                    <p>                I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <code>additionConfigs</code>.</p>
                    <p>                I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <code>additionConfigs</code>.</p>
                    <p>                I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <code>additionConfigs</code>.</p>
                    <p>                I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <code>additionConfigs</code>.</p>
                    <p>                I have a form. Initially there is some default values (user name and address). When user click add, there is an extra input which user can enter another name and address, and the extra name and address will store in <code>additionConfigs</code>.</p>

                </div>
                <div>I have seen this and hence this. But, I'm still confused about how to implement that suggestion for this simple case.</div>
                <div className='d-flex'>
                    <button type="button" className="btn btn-secondary m-2">Javascript</button>
                    <button type="button" className="btn btn-secondary m-2">Reactjs</button>
                    <button type="button" className="btn btn-secondary  m-2">React Hook</button>
                </div>


                <div className='d-flex'>
                    <div className="p-2 w-32 ">
                        <a href='' className='link-improve'>Share </a>
                        <a href='' className='link-improve'>Improve this question </a>
                        <a href='' className='link-improve'>Follow </a>

                    </div>
                    {/* <div className="d-flex flex-row-reverse">
  <div className="p-2">Flex item 1</div>
  <div className="p-2">Flex item 2</div>
  <div className="p-2">Flex item 3</div>
</div> */}
                    <div className="d-flex flex-row-reverse card mb-3 card-roll " >
                        <div className="row g-0 d-flex ">
                            <div className='p-2'>
                                asked Feb 11, 2019 at 15:18
                            </div>
                            <div className="col-md-2 p-2">
                                <img src="https://i.stack.imgur.com/kKetn.jpg?s=64&g=1" className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="col-md-8 ">

                                <div className="card-body">
                                    <h5 className="card-title">devserkan</h5>
                                    <div className='d-flex'>
                                        <div>16.3k</div>
                                        <div className='d-flex'>
                                            <div>
                                            <i className="bi bi-dot"></i>
                                            </div>
                                            <div>4</div>
                                        </div>
                                        <div className='d-flex'>
                                            <div>
                                            <i className="bi bi-dot"></i>
                                            </div>
                                            <div>3</div>
                                        </div>
                                        <div className='d-flex'>
                                            <div>
                                            <i className="bi bi-dot"></i>
                                            </div>
                                            <div>26</div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <a href='' className='add-comment'>Add a comment</a>
                </div>
            </div>
        </>
    )
}
export default React.memo(Maincontent)