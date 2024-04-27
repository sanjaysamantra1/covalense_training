import React from 'react'

 function ChildB() {
    console.log('Child B rendered')
    return (
        <div>ChildB</div>
    )
}
export default React.memo(ChildB);
