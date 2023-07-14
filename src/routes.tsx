import component_array_types from "./pages/array-types"
import component_auction from "./pages/auction"
import component_basic_types from "./pages/basic-types"
import component_blocktime_bet from "./pages/blocktime-bet"
import component_builtin_functions from "./pages/builtin-functions"
import component_coin_toss from "./pages/coin-toss"
import component_console_log from "./pages/console-log"
import component_constructor from "./pages/constructor"
import component_deploy_and_call from "./pages/deploy-and-call"
import component_domain_types from "./pages/domain-types"
import component_ecdsa_oracle from "./pages/ecdsa-oracle"
import component_enforce_op_return from "./pages/enforce-op-return"
import component_enforce_recipient from "./pages/enforce-recipient"
import component_for_loop from "./pages/for-loop"
import component_hash_puzzle from "./pages/hash-puzzle"
import component_hashed_map from "./pages/hashed-map"
import component_hashed_set from "./pages/hashed-set"
import component_hello_world from "./pages/hello-world"
import component_methods from "./pages/methods"
import component_multisig from "./pages/multisig"
import component_number_type from "./pages/number-type"
import component_operators from "./pages/operators"
import component_p2pkh from "./pages/p2pkh"
import component_properties from "./pages/properties"
import component_rabin_signature from "./pages/rabin-signature"
import component_return from "./pages/return"
import component_script_context from "./pages/script-context"
import component_state from "./pages/state"
import component_tic_tac_toe from "./pages/tic-tac-toe"
import component_time_lock from "./pages/time-lock"
import component_user_defined_types from "./pages/user-defined-types"
import component_variable_declarations from "./pages/variable-declarations"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
    {
        path: "/array-types",
        component: component_array_types
    },
    {
        path: "/auction",
        component: component_auction
    },
    {
        path: "/basic-types",
        component: component_basic_types
    },
    {
        path: "/blocktime-bet",
        component: component_blocktime_bet
    },
    {
        path: "/builtin-functions",
        component: component_builtin_functions
    },
    {
        path: "/coin-toss",
        component: component_coin_toss
    },
    {
        path: "/console-log",
        component: component_console_log
    },
    {
        path: "/constructor",
        component: component_constructor
    },
    {
        path: "/deploy-and-call",
        component: component_deploy_and_call
    },
    {
        path: "/domain-types",
        component: component_domain_types
    },
    {
        path: "/ecdsa-oracle",
        component: component_ecdsa_oracle
    },
    {
        path: "/enforce-op-return",
        component: component_enforce_op_return
    },
    {
        path: "/enforce-recipient",
        component: component_enforce_recipient
    },
    {
        path: "/for-loop",
        component: component_for_loop
    },
    {
        path: "/hash-puzzle",
        component: component_hash_puzzle
    },
    {
        path: "/hashed-map",
        component: component_hashed_map
    },
    {
        path: "/hashed-set",
        component: component_hashed_set
    },
    {
        path: "/hello-world",
        component: component_hello_world
    },
    {
        path: "/methods",
        component: component_methods
    },
    {
        path: "/multisig",
        component: component_multisig
    },
    {
        path: "/number-type",
        component: component_number_type
    },
    {
        path: "/operators",
        component: component_operators
    },
    {
        path: "/p2pkh",
        component: component_p2pkh
    },
    {
        path: "/properties",
        component: component_properties
    },
    {
        path: "/rabin-signature",
        component: component_rabin_signature
    },
    {
        path: "/return",
        component: component_return
    },
    {
        path: "/script-context",
        component: component_script_context
    },
    {
        path: "/state",
        component: component_state
    },
    {
        path: "/tic-tac-toe",
        component: component_tic_tac_toe
    },
    {
        path: "/time-lock",
        component: component_time_lock
    },
    {
        path: "/user-defined-types",
        component: component_user_defined_types
    },
    {
        path: "/variable-declarations",
        component: component_variable_declarations
    },
    {
        path: "",
        component: component_
    },
]

export default routes