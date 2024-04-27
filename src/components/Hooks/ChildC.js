import React from 'react'

function ChildC() {
    console.log('Child -c rendered')
    return (
        <div>ChildC</div>
    )
}
export default React.memo(ChildC);