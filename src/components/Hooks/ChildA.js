import React from 'react'

function ChildA({a}) {
    console.log('Child A rendered')
    return (
        <div>ChildA</div>
    )
}
export default React.memo(ChildA);